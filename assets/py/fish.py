import mes_fonctions
from bs4 import BeautifulSoup
import os
import time
import random
import mysql.connector


conn = mysql.connector.connect(
    host="localhost",
    user="root",
    database="projet"
)

if conn.is_connected():
    cursor = conn.cursor()

    path = r"C:\Users\Formation\Desktop\formations\devWeb\adrar\__projet\projet_02\assets\fishs"


    page = 1
    while True:
        if page > 41:
            break
        try:
            url = "https://www.fishipedia.fr/fr/poissons/?pg=" + str(page)
            response = mes_fonctions.my_request(url)
            if response.status_code == 200:
                html = BeautifulSoup(response.content, "lxml")

                items = html.find_all("div", class_="card card--aquarium-item")
                for item in items:
                    try:                    
                        nomPoisson = item.find("h5", class_="card-title").text.capitalize()    
                        try:
                            nomLatin = item.find("p", class_="card-subtitle").text.capitalize()
                        except:
                            nomLatin = None
                        try:
                            tailleMoyenne = item.find("div", class_="card__medata card__medata--aquarium-item").text.strip().replace(" ", "")
                        except:
                            tailleMoyenne = None
                        try:
                            description = item.find("p", class_="card__medata-description").text.strip()
                        except:
                            description = None
                        
                        try:
                            liste_eaux = item.find_all("i", class_="badge-pill")
                            liste_eaux_ = []
                            for eaux in liste_eaux:
                                try:
                                    liste_eaux_.append(eaux["title"].capitalize())
                                except:
                                    continue
                            typeEaux = ", ".join(liste_eaux_)
                        except:
                            typeEaux = None

                        try:
                            imageNom = nomPoisson.lower() + "_01"
                            imageUrl = item.find("img", class_="card__image")["src"]
                            pathimage = os.path.join(path, imageNom + ".png")
                            responseImage = mes_fonctions.my_request(imageUrl)
                            if responseImage.status_code == 200:                            
                                with open(pathimage, "wb") as f:
                                    f.write(responseImage.content)
                            else:
                                print("     erreur code 200 image")
                        except:
                            imageNom = None
                        insert_query = "INSERT INTO especes (nom_espece, nom_latin_espece, taille_moyenne_espece, description_espece, type_eaux_espece, image_espece) VALUES (%s, %s, %s, %s, %s, %s)"
                        data = (nomPoisson, nomLatin, tailleMoyenne, description, typeEaux, imageNom)
                        cursor.execute(insert_query, data)
                        print("page", page, ":", nomPoisson)

                    except:
                        print("     erreur item", str(page))
                        continue
            else:
                print("     erreur code 200")
            
            time.sleep(random.randint(1, 4))
            page += 1
        except:
            print("     erreur page : ", str(page))
            continue
    conn.commit()

    print("ok")

    cursor.close()
    conn.close()
else:
    print("pas de connexion.")
        