package com.dreamteam.icebreakerbingo;

import com.dreamteam.icebreakerbingo.BingoCard;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BingoCardRepository extends MongoRepository<BingoCard, String> {

}