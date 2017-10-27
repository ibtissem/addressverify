# -*- coding: utf-8 -*-

{
    'name': 'Addressverify connector',
    'version': '11.0',
    'category': 'addressverify',
    'summary': 'Check the validation of the address in checkout form on the website',
    'version': '1.0',
    'description': """
        Addressverify connector engine using google map address verification
        Url to get your proper api key from google maps: https://developers.google.com/maps/documentation/geocoding/start
                   """,
    'author':  'Ibtissem Zeiri', 
    'depends': ['base','website','website_sale'],
    'data': [  
        'views/config.xml', 
             ],
    'qweb': ['static/src/xml/checkout.xml'],
    'installable': True,

}

