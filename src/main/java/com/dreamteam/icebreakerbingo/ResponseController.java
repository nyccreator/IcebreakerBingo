package com.dreamteam.icebreakerbingo;

import com.dreamteam.icebreakerbingo.Response;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ResponseController {

    @GetMapping("/response")
    public String responseForm(Model model) {
        model.addAttribute("response", new Response());
        return "response";
    }

    @PostMapping("/response")
    public String responseSubmit(@ModelAttribute Response response, Model model) {
        model.addAttribute("response", response);
        return "result";
    }

}