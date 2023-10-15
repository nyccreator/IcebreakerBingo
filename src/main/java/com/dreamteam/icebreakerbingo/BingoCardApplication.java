package com.dreamteam.icebreakerbingo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BingoCardApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(BingoCardApplication.class, args);

	}

	@Autowired
	private BingoCardRepository repository;


	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

		// randomly generate 1 2d string array
		ArrayList<String> mutableContentPool = new ArrayList<>(List.of(
				"Favorite sport is basketball",
				"Has been on a cruise",
				"Reads comics",
				"Goes to Georgia Tech",
				"Has studied abroad",
				"Speaks multiple languages",
				"Favorite food is pizza",
				"Has a younger brother",
				"Favorite color is purple",
				"Has participated in a hackathon",
				"Has a pet",
				"Likes pineapple on pizza",
				"Sleeps with a stuffed animal",
				"Does yoga",
				"Has been skydiving",
				"Can't swim",
				"Is afraid of clowns",
				"Has skipped a grade",
				"Has climbed a mountain",
				"Moved in the last year",
				"Has played a sport in college",
				"Has built an app",
				"Has built a website",
				"Prefers remote work",
				"Favorite subject is math"
		));

		BingoCard defaultBingoCard = new BingoCard("0", new String[5][5]);

		for (int i = 0; i < defaultBingoCard.getContents().length; i++) {
			for (int j = 0; j < defaultBingoCard.getContents()[i].length; j++) {
				int randIndex = (int) (Math.random() * mutableContentPool.size());
				defaultBingoCard.getContents()[i][j] = mutableContentPool.get(randIndex);
				mutableContentPool.remove(randIndex);
			}
		}

		defaultBingoCard.getContents()[2][2] = "";

		repository.save(defaultBingoCard);
	}
}