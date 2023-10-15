package com.dreamteam.icebreakerbingo;

public class BingoCardNotFoundException extends RuntimeException {
    BingoCardNotFoundException(String id) {
        super("Could not find bingo card " + id);
    }
}
