sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementproject/test/integration/FirstJourney',
		'riskmanagementproject/test/integration/pages/RisksList',
		'riskmanagementproject/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);