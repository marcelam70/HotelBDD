package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import stepdefinition.SharedSD;
import utils.BasePage;

import java.util.ArrayList;
import java.util.List;

public class HotelHilton  extends ElementUtil {
   // By cityCenter = By.xpath("//a[contains(text(),'City center')]");
    By distanceAirport = By.xpath("//a[contains(text(),'Logan International Airport (BOS)')]");
   // By hotelNames =  By.xpath("//a[@class='property-name-link']");
    By lists = By.xpath("//a[@class='property-name-link']");


    public boolean verifyHotelsAreWithin10Miles() {
        List<String> distanceFromAirport = new ArrayList<>();
        List<WebElement> distances = BasePage.get().findElements(distanceAirport);
        for (WebElement distance : distances) {
            distanceFromAirport.add(distance.getText());

        }
        ArrayList<Double> distanceInNumbers = new ArrayList<Double>();
        for (int i = 0; i < distanceFromAirport.size(); i++) {
            distanceInNumbers.add(Double.parseDouble(distanceFromAirport.get(i).substring(0, 5)));
            //(distanceFromAirport.get(i).substring(0,5)));
        }
        for (int i = 0; i < distanceInNumbers.size(); i++) {
            if (distanceInNumbers.get(i) > 10) {
                return true;
            }
        }
        return true;
    }

    public boolean isHiltonPresentInTheList() {
        List<WebElement> listOfHotels = webAction(lists).findElements(lists);

        for (int i = 0; i < listOfHotels.size(); i++) {

            String nameOfHotel = listOfHotels.get(i).getText();

            if (nameOfHotel.contains("Hilton")) {
                System.out.println("There is Hilton in the list");
            } else {
                System.out.println("There is no Hilton");

            }
            return true;

        }
        return false;
    }

}

