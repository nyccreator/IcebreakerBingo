package com.dreamteam.icebreakerbingo;

import org.springframework.data.annotation.Id;

public class BingoCard {

    @Id
    private String id;

    private String[][] contents;

    public BingoCard() {

    }

    public BingoCard(String[][] contents) {
        this.contents = contents;
    }

    public BingoCard(String id, String[][] contents) {
        this.id = id;
        this.contents = contents;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String[][] getContents() {
        return contents;
    }

    public void setContents(String[][] contents) {
        this.contents = contents;
    }


}
