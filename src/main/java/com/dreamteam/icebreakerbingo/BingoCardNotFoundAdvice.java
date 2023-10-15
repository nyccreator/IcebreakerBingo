package com.dreamteam.icebreakerbingo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class BingoCardNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(BingoCardNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String BingoCardNotFoundHandler(BingoCardNotFoundException ex) {
        return ex.getMessage();
    }
}
