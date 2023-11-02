package com.example.projet;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EspeceController {
    @RequestMapping("/guide")
    public String testPage(Model model) {
        return "guide";
    }
}
