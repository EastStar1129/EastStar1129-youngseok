package org.church.youngseok.login;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class Controller {
    @GetMapping("/test")
    public ResponseEntity test() {
        return ResponseEntity.ok("spring boot test");
    }

}
