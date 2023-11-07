plugins {
	java
	war
	id("org.springframework.boot") version "3.1.5"
	id("io.spring.dependency-management") version "1.1.3"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-thymeleaf")
	implementation("org.springframework.boot:spring-boot-starter-web")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	//Permet à JAVA de se connecter à une base SQL
	runtimeOnly("com.mysql:mysql-connector-j")
	//JPA Framework Java qui génère du SQL
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	//Le validator hibernate
	implementation("org.springframework.boot:spring-boot-starter-validation")
	implementation("org.mindrot:jbcrypt:+")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
