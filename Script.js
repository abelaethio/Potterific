var characters = [
    // ... (your character data)
];

$(document).ready(function() {
    var uniqueHouses = [...new Set(characters.map(character => character.house))];
    var $table = $("table");

    // Create buttons for each unique house value programmatically
    uniqueHouses.forEach(house => {
        var $button = $("<button>").text(house);
        $button.click(function() {
            $table.find("tr").hide().filter(function() {
                return $(this).find("td:nth-child(3)").text() === house;
            }).show();
            updateRowColors();
        });
        $("#buttons").append($button);
    });

    // Generate table rows
    characters.forEach(character => {
        var $row = $("<tr>").append(
            $("<td>").text(character.name),
            $("<td>").text(character.role),
            $("<td>").text(character.house),
            $("<td>").text(character.gender),
            $("<td>").text(character.alignment)
        );
        $table.append($row);
    });

    // Add click handler to reset button
    $("#resetBtn").click(function() {
        $table.find("tr").show();
        updateRowColors();
    });

    // Set alternating row colors initially
    updateRowColors();
});

function updateRowColors() {
    $("table tr:visible").removeClass("even");
    $("table tr:visible:even").addClass("even");
}
