package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import runnerTest.webPages.HotelsPage;
import utils.BasePage;

public class HotelsPageSD {
    HotelsPage hotelsHomePage = new HotelsPage();

    @Given("^I am on Hotels Home Page$")
    public void verified(){

        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.hotels.com/");
    }

    @When("^I am on default locations search result screen$")
    public void hotelsMainPage() {

        hotelsHomePage.getCityName("Boston, Massachusetts, United States of America");
    }
    @And("^I select (5 stars|4 stars|3 stars) on the hotels page$")
    public void chooseStars(String stars) throws InterruptedException {
        switch (stars){
            case "5 stars":
                hotelsHomePage.clickOnFiveStars();
                break;
            case "4 stars":
                hotelsHomePage.clickOnFourStars();
                break;
            case "3 stars":
                hotelsHomePage.clickOnThreeStars();
        }
    }
    @Then("^I verify system displays only (5 stars|4 stars|3 stars) hotels on search result$")
    public void verifyStarsIsSelected(String stars){
        switch (stars){
            case "5 stars":
                hotelsHomePage.isFiveStarSelected();
                break;
            case "4 stars":
                hotelsHomePage.isFourStarSelected();
                break;
            case "3 stars":
                hotelsHomePage.isThreeStarSelected();
        }
    }

}
