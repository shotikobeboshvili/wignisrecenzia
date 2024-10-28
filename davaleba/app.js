function submitall() {
    let Title = document.getElementById('title').value;
    let Quantity = parseInt(document.getElementById('quantity').value);
    let Readpages = parseInt(document.getElementById('readpages').value);

    if (!Title || !Quantity || !Readpages) {
        document.getElementById('result').innerHTML = `<p style="color: red;"> გთხოვთ შეიყვანოთ მონაცემები! </p>`;
    }
    else if (Readpages === 0) {
        document.getElementById('result').innerHTML = `<p style="color: red;"> შენ წიგნის კითხვა არც კი დაგიწყია! </p>`;
    }
    else if (Readpages < Quantity / 2) {
        document.getElementById('result').innerHTML = `<p style="color: red;"> შენ კიდევ ბევრი დაგრჩა წასაკითხი! </p>`;
    }
    else if (Readpages === Quantity / 2) {
        document.getElementById('result').innerHTML = `< style="color: yellow;"> ყოჩაღ, შენ ზუსტად წიგნის ნახევარი წაგიკითხია! </p>`;
    }
    else if (Readpages > Quantity / 2 && Readpages < Quantity) {
        document.getElementById('result').innerHTML = `<p style="color: yellow;"> ყოჩაღ, შენ ნახევარზე მეტი წაგიკითხია! </p>`;
    }
    else if (Readpages === Quantity) {
        document.getElementById('result').innerHTML = `<p style="color: green;"> ყოჩაღ, შენ დაასრულე ${Title} -ის კითხვა! </p>`;
    }
    else {
        document.getElementById('result').innerHTML = `<p style="color: red;"> წიგნს ამდენი გვერდი არ აქვს რას იტყუები! </p>`;
    }
}