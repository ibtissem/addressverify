# -*- coding: utf-8 -*-

{
    'name': 'Addressverify connector',
    'version': '10.0',
    'category': 'Search',
    'summary': '',
    'description': """

Addressverify connector engine using google map address verification
Url to get your proper api key from google maps: https://developers.google.com/maps/documentation/geocoding/start
==========================


    """,

    'author':  'Ibtissem Zeiri', 

    'depends': ['base','website','website_sale'],

    'data': [  
        'views/config.xml', 
        'views/checkout.xml',
             ],

    'installable': True,
    'auto_install': False,
    'application': False,
}

