var solution = function (angles) {
    var openingCount = 0;
    var extras = 0;
    var str = angles.split("");
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var letter = str_1[_i];
        if (letter === ">") {
            if (openingCount === 0) {
                extras++;
            }
            else {
                openingCount--;
            }
        }
        else {
            openingCount++;
        }
    }
    var startingTags = "<".repeat(extras);
    var trailingTags = ">".repeat(openingCount);
    return startingTags + angles + trailingTags;
};
