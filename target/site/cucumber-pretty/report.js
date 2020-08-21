$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HotelsPage.feature");
formatter.feature({
  "line": 2,
  "name": "Hotels feature",
  "description": "",
  "id": "hotels-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on default locations search result screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \u003cstars\u003e on the hotels page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify system displays only \u003cstars\u003e hotels on search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 12,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;1"
    },
    {
      "cells": [
        "5 stars"
      ],
      "line": 13,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2"
    },
    {
      "cells": [
        "4 stars"
      ],
      "line": 14,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3"
    },
    {
      "cells": [
        "3 stars"
      ],
      "line": 15,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsPageSD.verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 6,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on default locations search result screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select 5 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify system displays only 5 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsPageSD.hotelsMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 9
    }
  ],
  "location": "HotelsPageSD.chooseStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 30
    }
  ],
  "location": "HotelsPageSD.verifyStarsIsSelected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsPageSD.verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 6,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on default locations search result screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select 4 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify system displays only 4 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsPageSD.hotelsMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 9
    }
  ],
  "location": "HotelsPageSD.chooseStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 30
    }
  ],
  "location": "HotelsPageSD.verifyStarsIsSelected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsPageSD.verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 6,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on default locations search result screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select 3 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify system displays only 3 stars hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsPageSD.hotelsMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 9
    }
  ],
  "location": "HotelsPageSD.chooseStars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 30
    }
  ],
  "location": "HotelsPageSD.verifyStarsIsSelected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsPageSD.verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "List of all of hotel within 10 miles radius of airport or downtown",
  "description": "",
  "id": "hotels-feature;list-of-all-of-hotel-within-10-miles-radius-of-airport-or-downtown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@hotels-2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I verify system displays all hotels within 10 miles radius of airport",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify Hilton Hotel is within 10 miles radius of downtown",
  "keyword": "And "
});
formatter.match({
  "location": "HotelsPageSD.hotelsMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelHiltonSD.hotelsWithin10MilestoAirport()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelHiltonSD.hotelsWithin10MilestoDownTown()"
});
formatter.result({
  "status": "skipped"
});
});