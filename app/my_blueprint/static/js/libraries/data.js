var global_names = {
    'sample': ["Country-A", "Country-B", "Country-C", "Country-D"],
    'immigration': ["Africa", "East-Asia", "Europe", "Latin-America", "North-America", "Oceania", "South-Asia", "South-East-Asia", "Soviet-Union", "West-Asia"],
    'phone': ["Apple", "HTC", "Huawei", "LG", "Nokia", "Samsung", "Sony", "Other"],
    'debt': ["France", "Britain", "Greece", "Italy", "Portugal", "USA", "Germany", "Ireland", "Japan", "Spain"],
    'space': ["Space-Angels", "Accion-Systems", "Analytical-Space", "Isotropic-Systems", "Leo-Labs", "Made-in-Space", "Planet", "SpaceX", "Hempisphere-Ventures", "Akash-Systems", "Lynk", "DCVC", "RRE-Ventures", "Lux-Capital", "Marcbell", "Founders-Fund"]
};

var global_data = {
    'sample': [[0, 2, 1, 4], [1, 0, 2, 1], [2, 0.5, 0, 0.5], [1, 3, 0.25, 0]],
    'immigration': [[3.142471, 0, 2.107883, 0, 0.540887, 0.155988, 0, 0, 0, 0.673004], [0, 1.630997, 0.601265, 0, 0.97306, 0.333608, 0, 0.380388, 0, 0.869311], [0, 0, 2.401476, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1.762587, 0.879198, 3.627847, 0, 0, 0, 0, 0], [0, 0, 1.215929, 0.276908, 0, 0, 0, 0, 0, 0], [0, 0, 0.17037, 0, 0, 0.190706, 0, 0, 0, 0], [0, 0.525881, 1.390272, 0, 1.508008, 0.34742, 1.307907, 0, 0, 4.902081], [0, 0.145264, 0.468762, 0, 1.057904, 0.278746, 0, 0.781316, 0, 0], [0, 0, 0.60923, 0, 0, 0, 0, 0, 1.870501, 0], [0, 0, 0.449623, 0, 0.169274, 0, 0, 0, 0, 0.927243]],
    'phone': [[9.6899, 0.1107, 0.0554, 0.0554, 0.2215, 1.1628, 0.0554, 0.2215], [0.8859, 1.8272, 0.2769, 0.1107, 0.443, 2.6024, 0.4983, 0.7198], [0.0554, 0, 0.2215, 0.0554, 0, 0, 0, 0], [0.443, 0.4983, 0.2215, 1.2182, 0.2769, 1.3843, 0.3322, 0.3322], [2.5471, 1.1074, 0.3876, 1.1628, 10.4097, 8.7486, 0.443, 1.6611], [2.4363, 1.052, 0.8306, 0.6645, 1.2182, 16.8328, 0.8859, 1.495], [0.5537, 0.2215, 0.0554, 0.4983, 0.4983, 1.7165, 1.7719, 0.1107], [2.5471, 0.4983, 0.3322, 1.052, 2.8239, 5.5925, 0.443, 5.4264]],
    'debt': [[0, 22.4, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 321, 12, 28.2, 326], [53.9, 0.55, 0, 3.22, 10.1, 3.1, 19.3, 0.34, 1.37, 0.78], [366, 26, 0, 0, 0, 3.16, 0, 0, 38.8, 9.79], [18.3, 19.4, 0, 0.87, 0, 0, 32.5, 0, 2.18, 62], [322, 345, 0, 0, 0.52, 0, 324, 0, 796, 163], [53.8, 0, 0, 111, 0, 0, 0, 0, 88.5, 0], [17.3, 0, 0, 2.83, 3.77, 11.1, 48.9, 0, 18.9, 0], [7.73, 0, 0, 0, 0, 0, 0, 0, 0, 0], [118, 0, 0, 0, 0, 0, 57.6, 6.38, 25.9, 0]],
    'space': [[0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0]]
};

var data_intro = {
    'immigration-chord': 'This chart shows the global bilateral flow of immigration between 1960 and 2015. The direction of the arrow of the link point to the flow of immigration from the origin to the destination.',
    'immigration-sankey': 'This chart shows the global bilateral flow of immigration between 1960 and 2015. The direction of the flow of immigration from origin to destination is from left to right.',
    'phone-chord':'This chart visualizes the responses of a mobile phone survey in Netherlands in 2000. Respondents gave information about the brands of their current and previous phones. The links in the chord diagram represent the share of users switching between different brands. The direction of the link point from the previous phone brand to the current one.',
    'phone-sankey':'This chart visualizes the responses of a mobile phone survey in Netherlands in 2000. Respondents gave information about the brands of their current and previous phones. The previous phone brands are on the left and the current phone brands are on the right. The links from left to right represent the share of switching between the different phone brands.',
    'debt-chord':'This chart visualizes the Debt Crisis in the European Union that started in 2009. The links in the chord diagram represent the debt owed between the different countries. The direction of the arrow of the link point from the country that has borrowed the money towards the country that it owes its debt to.',
    'debt-sankey':'This chart visualizes the Debt Crisis in the European Union that started in 2009. The flow of links from left to right indicates the flow of debt such that the country on the left owes money to the country on the right.',
    'space-chord':'This chart visualizes the flow of investments among companies that are pioneering in space research. The links represent the share of investment either received or given by a company. The direction of the arrow the of the link points from the funder company that has invested the money towards the company that it has invested in.',
    'space-sankey':'This chart visualizes the flow of investments among companies that are pioneering in space research. The funder companies on the left have invested in the companies on the right and the links represent their share of investment',
   };

var condition_map = {
    '1': ['chord-A', 'sankey-B'],
    '2': ['chord-B', 'sankey-A'],
    '3': ['sankey-A', 'chord-B'],
    '4': ['sankey-B', 'chord-A']
};

var studyQuestions = {

    'A-sample': [{
        "questionType": "existence",
        "label": "Is there a link from Country A to Country B?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "Which country is the end of the largest link starting at Country A?",
        "choices": ["Country A", "Country B", "Country C", "Country D"],
        "answer": "Country D"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which link is larger: Country A to Country B, or Country D to Country A?",
        "choices": ["Country A to Country B", "Country D to Country A"],
        "answer": "Country A to Country B"
    }, {
        "questionType": "min-max",
        "label": "What country exports the largest total amount (including all destinations)?",
        "choices": ["Country A", "Country B", "Country C", "Country D"],
        "answer": "Country A"
    }, {
        "questionType": "count-links",
        "label": "How many countries does Country C export to?",
        "choices": ["1", "2", "3", "4", "5"],
        "answer": "3"
    }],

    'A-immigration': [{
        "questionType": "existence",
        "label": "Is there a link from East Asia to South Asia?",
        "choices": ["Yes", "No"],
        "answer": 'No'
    }, {
        "questionType": "find-element",
        "label": "Which region has the largest link going to Europe (including Europe)?",
        "choices": ['Africa', 'East Asia', 'Europe', 'Latin America', 'North America', 'Oceania', 'South Asia', 'South East Asia', 'Soviet Union', 'West Asia'],
        "answer": "Europe"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which link is larger: Africa to Europe, or South Asia to North America?",
        "choices": ["Africa to Europe", "South Asia to North America"],
        "answer": "Africa to Europe"
    }, {
        "questionType": "min-max",
        "label": "What region receives the largest total number of immigrants?",
        "choices": ['Africa', 'East Asia', 'Europe', 'Latin America', 'North America', 'Oceania', 'South Asia', 'South East Asia', 'Soviet Union', 'West Asia'],
        "answer": "Europe"
    }, {
        "questionType": "count-links",
        "label": "How many links go to South East Asia?",
        "choices": ["1", "2", "3", "4", "5"],
        "answer": "2"
    }],

    'A-phone': [{
        "questionType": "existence",
        "label": "Does the chart show any users switching from Samsung to HTC?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "For current Nokia users who switched brands, what previous brand did the largest number switch from other than Nokia itself?",
        "choices": ['Apple', 'HTC', 'Huawei', 'LG', 'Samsung', 'Sony', 'Other'],
        "answer": "Other"
    }, {
        "questionType": "compare-magnitude",
        "label": "Do more Nokia users switch to Samsung or Other?",
        "choices": ["Samsung", "Other"],
        "answer": "Samsung"
    }, {
        "questionType": "min-max",
        "label": "Which brand had the largest number of users before the switch?",
        "choices": ['Apple', 'HTC', 'Huawei', 'LG', 'Nokia', 'Samsung', 'Sony', 'Other'],
        "answer": "Samsung"
    }, {
        "questionType": "count-links",
        "label": "How many different brands had users who switched to Sony? (not counting people who stayed with Sony)?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        "answer": "6"
    }],

    'A-debt': [{
        "questionType": "existence",
        "label": "Does Greece owe money to Portugal?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "What is the largest link starting at the United States?",
        "choices": ['France', 'Britain', 'Greece', 'Italy', 'Portugal', 'USA', 'Germany', 'Ireland', 'Japan', 'Spain'],
        "answer": "Japan"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which link is larger: Greece to France, or Germany to Italy?",
        "choices": ["Greece to France", "Germany to Italy"],
        "answer": "Germany to Italy"
    }, {
        "questionType": "min-max",
        "label": "Which two countries does Britain owe the most to?",
        "choices": ["Germany and Ireland", "Germany and Japan", "Spain and France", "Spain and Germany", "Spain and Japan"],
        "answer": "Spain and Germany"
    }, {
        "questionType": "count-links",
        "label": "How many countries does Germany owe money to?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "answer": "3"
    }],

    'A-space': [{
        "questionType": "existence",
        "label": "Does funder RRE Ventures invest in company Analytical Space?",
        "choices": ["Yes", "No"],
        "answer": 'No'
    }, {
        "questionType": "find-element",
        "label": "What company has both SpaceAngels and FoundersFund as investors?",
        "choices": ['Accion Systems', 'Analytical Space', 'Isotropic Systems', 'Leo Labs', 'Made in Space', 'Planet', 'SpaceX', 'Akash Systems', 'Lynk'],
        "answer": "SpaceX"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which company has more investors: Analytical Space or Akash Systems?",
        "choices": ["Analytical Space", "Akash Systems"],
        "answer": "Akash Systems"
    }, {
        "questionType": "min-max",
        "label": "Which funder has invested in the most companies?",
        "choices": ['Space Angels', 'Hempisphere Ventures', 'DCVC', 'RRE Ventures', 'Lux Capital', 'Marcbell', 'Founders Fund'],
        "answer": "Space Angels"
    }, {
        "questionType": "count-links",
        "label": "How many companies has funder Marcbell invested in?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "answer": "3"
    }],

    'B-sample': [{
        "questionType": "existence",
        "label": "Is there a link from Country D to Country A?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "Which country is the starting point for the largest link ending at Country A?",
        "choices": ["Country A", "Country B", "Country C", "Country D"],
        "answer": "Country C"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which link is larger: Country B to Country C, or Country D to Country B?",
        "choices": ["Country B to Country C", "Country D to Country B"],
        "answer": "Country D to Country B"
    }, {
        "questionType": "min-max",
        "label": "What country receives the smallest total exports (including all sources)?",
        "choices": ["Country A", "Country B", "Country C", "Country D"],
        "answer": "Country C"
    }, {
        "questionType": "count-links",
        "label": "How many countries does Country B receive exports from?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "answer": "3"
    }],

    'B-immigration': [{
        "questionType": "existence",
        "label": "Is there a link from Africa to East Asia?",
        "choices": ["Yes", "No"],
        "answer": 'No'
    }, {
        "questionType": "find-element",
        "label": "Which region has the largest link going to North America?",
        "choices": ['Africa', 'East Asia', 'Europe', 'Latin America', 'North America', 'Oceania', 'South Asia', 'South East Asia', 'Soviet Union', 'West Asia'],
        "answer": "Latin America"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which link is larger: South East Asia to North America, or Latin America to Europe?",
        "choices": ["South East Asia to North America", "Latin America to Europe"],
        "answer": "Latin America to Europe"
    }, {
        "questionType": "min-max",
        "label": "What region has the largest link to itself (self-migration)?",
        "choices": ['Africa', 'East Asia', 'Europe', 'Latin America', 'North America', 'Oceania', 'South Asia', 'South East Asia', 'Soviet Union', 'West Asia'],
        "answer": "Africa"
    }, {
        "questionType": "count-links",
        "label": "How many links go to West Asia?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "answer": "4"
    }],

    'B-phone': [{
        "questionType": "existence",
        "label": "Does the chart show any users switching from Other to LG?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "For previous Sony users who switched brands from Sony, what did the largest group switch to?",
        "choices": ['Apple', 'HTC', 'Huawei', 'LG', 'Nokia', 'Samsung', 'Other'],
        "answer": "Samsung"
    }, {
        "questionType": "compare-magnitude",
        "label": "Do more users switch from Samsung to Sony, or from Apple to HTC?",
        "choices": ["Samsung to Sony", "Apple to HTC"],
        "answer": "Samsung to Sony"
    }, {
        "questionType": "min-max",
        "label": "Which brand has more total users after the switch: HTC or Huawei?",
        "choices": ['HTC', 'Huawei'],
        "answer": "HTC"
    }, {
        "questionType": "count-links",
        "label": "How many different brands had users who switched to Samsung? (not counting people who stayed with Samsung)?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        "answer": "6"
    }],

    'B-debt': [{
        "questionType": "existence",
        "label": "Does Germany owe money to Italy?",
        "choices": ["Yes", "No"],
        "answer": 'Yes'
    }, {
        "questionType": "find-element",
        "label": "Which country owes the most to France?",
        "choices": ['France', 'Britain', 'Greece', 'Italy', 'Portugal', 'USA', 'Germany', 'Ireland', 'Japan', 'Spain'],
        "answer": "Italy"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which is larger: the total links going outward from Ireland, or the total links coming in to Ireland?",
        "choices": ["Out from Ireland", "In to Ireland"],
        "answer": "Out from Ireland"
    }, {
        "questionType": "min-max",
        "label": "Which country does Spain owe the most to?",
        "choices": ['France', 'Britain', 'Greece', 'Italy', 'Portugal', 'USA', 'Germany', 'Ireland', 'Japan', 'Spain'],
        "answer": "France"
    }, {
        "questionType": "count-links",
        "label": "How many countries does France owe money to?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "answer": "1"
    }],

    'B-space': [{
        "questionType": "existence",
        "label": "Does funder Founders Fund invest in company Leo Labs?",
        "choices": ["Yes", "No"],
        "answer": 'No'
    }, {
        "questionType": "find-element",
        "label": "What company has both Hemisphere Ventures and RRE Ventures as investors?",
        "choices": ['Accion Systems', 'Analytical Space', 'Isotropic Systems', 'Leo Labs', 'Made in Space', 'Planet', 'SpaceX', 'Akash Systems', 'Lynk'],
        "answer": "Lynk"
    }, {
        "questionType": "compare-magnitude",
        "label": "Which company has more investors: Isotronic Systems or Leo Labs?",
        "choices": ["Isotronic Systems", "Leo Labs"],
        "answer": "Leo Labs"
    }, {
        "questionType": "min-max",
        "label": "Which company has the most funders?",
        "choices": ['Accion Systems', 'Analytical Space', 'Isotropic Systems', 'Leo Labs', 'Made in Space', 'Planet', 'SpaceX', 'Akash Systems', 'Lynk'],
        "answer": "Planet"
    }, {
        "questionType": "count-links",
        "label": "How many funders have invested in Made In Space?",
        "choices": ["0", "1", "2", "3", "4", "5", "6", "7"],
        "answer": "2"
    }]
};