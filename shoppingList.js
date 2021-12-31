// JavaScript source code
$(document).ready(function () {
    $("#weeklyPlanningNav").click(function () {
        $("#DisplayWeeks").show();
        $("#DisplayMeals").hide();
        $("#DisplayRecipes").hide();
    });

    $("#mealNav").click(function () {
        $("#DisplayWeeks").hide();
        $("#DisplayMeals").show();
        $("#DisplayRecipes").hide();
    });

    $(".mealListItem").click(function () {
        $("#DisplayWeeks").hide();
        $("#DisplayMeals").hide();
        $("#DisplayRecipes").show();

        var name = $(this).name; //??
        /** Link up to firebase to pull this info, grab it by name **/
        //Can delete this test instance
        var testMealItem = {
            "name": "Sweet Tea",
            "ingredients":
                [{
                    "name": "Sugar",
                    "amount": "1 cup"
                },
                {
                    "name": "Family Sized Tea Bags",
                    "amount": "3"
                },
                {
                    "name": "Water",
                    "amount": "4 cups"
                }
                ]

        }
        //^^ delete
        
        $("#selectedMealName").text(testMealItem.name);
        $("#ingredientsList").empty();
        console.log(testMealItem.ingredients);
        $.each(testMealItem.ingredients, function (i, item) {            
            $("#ingredientsList").append(item.amount + " " + item.name + "<br />");

        });
    });
});