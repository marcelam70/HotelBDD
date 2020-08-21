package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import runnerTest.webPages.HotelHilton;

public class HotelHiltonSD {
    HotelHilton hotelMile = new HotelHilton();

    @Then("^I verify system displays all hotels within 10 miles radius of airport$")
    public void hotelsWithin10MilestoAirport(){
        // hotelMile.verifyHotelsAreWithin10Miles();
        System.out.println("Hotels' names within 10 miles: "+hotelMile.verifyHotelsAreWithin10Miles());


    }
    @And("^I verify Hilton Hotel is within 10 miles radius of downtown$")
    public void hotelsWithin10MilestoDownTown(){
        System.out.println("Is hilton in the hotel's list: "+hotelMile.isHiltonPresentInTheList());

    }
}
