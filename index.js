// word counter
import inquirer from "inquirer";
do {
    let ask = await inquirer.prompt([
        {
            message: "selcet what kind of content you have",
            type: "list",
            name: "content",
            choices: [
                "paragraphs",
                "sentences",
                "words",
                "characters",
                "Exit"
            ]
        },
        {
            message: "enter or paste your content: ",
            name: "paragraph",
            type: "input",
        },
    ]);
    if (ask.content === "paragraphs") {
        let paragraph = ask.paragraph.split(" ");
        console.log("Number of paragraphs in your content is =>", paragraph.length);
    }
    else if (ask.content === "sentences") {
        let sentence = ask.paragraph.split(".");
        console.log("Number of sentances in your content is =>", sentence.length);
    }
    else if (ask.content === "words") {
        let word = ask.paragraph.split(" ");
        console.log("Number of words in your content is =>", word.length);
    }
    else if (ask.content === "characters") {
        let character = ask.paragraph.split("");
        console.log(character.length);
    }
    else if (ask.counter == "Exit") {
        console.log("Have a nice day!");
        process.exit(0);
    }
    else {
        console.log("error");
    }
} while (true);
