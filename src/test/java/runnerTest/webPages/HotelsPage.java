package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.ArrayList;
import java.util.List;

public class HotelsPage  extends ElementUtil {

     By search = By.className("cta-strong");
     By cityName = By.xpath("//input[@id='qf-0q-destination']");
     By closeBtn = By.className("cta-link");

     By distance = By.xpath("//a[@data-menu='sort-submenu-distance']");
     By cityCenter = By.xpath("//a[contains(text(),'City center')]");
     By hotelName = By.xpath("//a[@class='property-name-link']");
     By range = By.xpath("//ul[@class='property-landmarks']/li[1]");


     By threeStar = By.id("f-star-rating-3");
     By fourStar = By.id("f-star-rating-4");
     By fiveStar = By.id("f-star-rating-5");


    public void getCityName(String name) {
        sendValue(cityName, "Boston, Massachusetts, United States of America");
    }

    public void getMyDestination() {
        webAction(closeBtn).click();
        scrollByPixel("0", "2000");
        webAction(search).click();


    }

    public void findCityCenter() {
        moveToElement(distance);
        clickOn(cityCenter);
    }

    public void clickOnFiveStars() {
        clickOn(threeStar);
    }

    public void clickOnFourStars() {
        clickOn(fourStar);
    }

    public void clickOnThreeStars() {
        clickOn(fiveStar);
    }

    public ArrayList<String[]> hotelNameList() {

        List<WebElement> hotelNames = webElements(hotelName);
        ArrayList<String[]> wholeList = new ArrayList<>();

        int size = hotelNames.size();
        for (int i = 0; i < size; i++) {
            scrollByPixel("0", "2000");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            hotelNames = webElements(hotelName);
            size = hotelNames.size();
            if (size >= 30) {
                break;
            }
        }

        List<WebElement> rangeList = webElements(range);

        for (int i = 0; i < rangeList.size(); i++) {

            String range1 = rangeList.get(i).getText();

            String range2 = range1.replaceAll("[a-zA-Z ]", " ");

            double distance = Double.parseDouble(range2);

            boolean isDistance = distance < 10.0;

            if (isDistance) {
                String distance1 = String.valueOf(distance);

                String hotelText = hotelNames.get(i).getText();

                String[] arrayList = {" Miles: ", distance1, " ", hotelText};
                wholeList.add(arrayList);

            }
        }
        return wholeList;
    }

    public void printMileageList() {
        System.out.println("The hotels which are in 10 mile radius");
        for (String[] a : hotelNameList()) {
            System.out.println(a[0] + a[1] + a[2] + a[3]);
        }
    }
        public void selectHiltonHotels () {
            System.out.println("The Hilton hotels which are in 10 mile radius");
            for (String[] a : hotelNameList()) {
                if (a[3].contains("Hilton")) {
                    System.out.println(a[0] + a[1] + a[2] + a[3]);
                }
            }
        }
            public void isFiveStarSelected () {
                isElementSelected(fiveStar);
            }

            public void isFourStarSelected () {
                isElementSelected(fourStar);
            }
            public void isThreeStarSelected () {
                isElementSelected(threeStar);
            }
        }




