package com.dreamteam.icebreakerbingo;

import java.util.List;

import com.dreamteam.icebreakerbingo.BingoCardRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class BingoCardController {

    private final BingoCardRepository repository;

    BingoCardController(BingoCardRepository repository) {
        this.repository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/api/bingocards")
    List<BingoCard> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/api/bingocards")
    BingoCard newBingoCard(@RequestBody BingoCard newBingoCard) {
        return repository.save(newBingoCard);
    }

    // Single item

    @GetMapping("/api/bingocards/{id}")
    BingoCard one(@PathVariable String id) {

        return repository.findById(id)
                .orElseThrow(() -> new BingoCardNotFoundException(id));
    }

    @PutMapping("/api/bingocards/{id}")
    BingoCard replaceBingoCard(@RequestBody BingoCard newBingoCard, @PathVariable String id) {

        return repository.findById(id)
                .map(bingoCard -> {
                    bingoCard.setContents(newBingoCard.getContents());
                    return repository.save(bingoCard);
                })
                .orElseGet(() -> {
                    newBingoCard.setId(id);
                    return repository.save(newBingoCard);
                });
    }

    @DeleteMapping("/api/bingocards/{id}")
    void deleteBingoCard(@PathVariable String id) {
        repository.deleteById(id);
    }
}