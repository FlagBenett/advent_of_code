package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
)

func main() {
	f, err := os.Open("input")
	if err != nil {
		log.Fatal("cannot read input file")
	}
	r := bufio.NewReader(f)
	s := bufio.NewScanner(r)
	s.Split(bufio.ScanLines)

	totalScore1 := 0
	totalScore2 := 0

	for s.Scan() {
		//fmt.Println(s.Text())
		totalScore1 += (itemScore(s.Text()) + roundScore(strings.Join(strings.Fields(s.Text()), "")))
		//fmt.Println(itemScore(s.Text()), roundScore(strings.Join(strings.Fields(s.Text()), "")), totalScore1)

		totalScore2 += (roundScore2(s.Text()) + itemScore2(strings.Join(strings.Fields(s.Text()), "")))
		//fmt.Println(roundScore2(s.Text()), itemScore2(strings.Join(strings.Fields(s.Text()), "")), totalScore2)

	}

	fmt.Println("step 1 : ", totalScore1)
	fmt.Println("step 2 : ", totalScore2)

}

func itemScore(round string) int {
	switch strings.Fields(round)[1] {
	//Rock
	case "X":
		return 1
	//Paper
	case "Y":
		return 2
	//Scissors
	case "Z":
		return 3
	}
	return 0
}

func roundScore(round string) int {
	switch round {
	//Draw
	case "AX", "BY", "CZ":
		return 3
	//Win
	case "AY", "BZ", "CX":
		return 6
	//Loss
	case "AZ", "BX", "CY":
		return 0
	}
	return 0
}

func roundScore2(round string) int {
	switch strings.Fields(round)[1] {
	//Loss
	case "X":
		return 0
	//Draw
	case "Y":
		return 3
	//Win
	case "Z":
		return 6
	}
	return 0
}

func itemScore2(round string) int {
	switch round {
	//Rock
	case "AY", "BX", "CZ":
		return 1
	//Paper
	case "BY", "CX", "AZ":
		return 2
	//Scissors
	case "CY", "AX", "BZ":
		return 3
	}
	return 0
}
