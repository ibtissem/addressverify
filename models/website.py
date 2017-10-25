# -*- coding: utf-8 -*-
from openerp import models, fields, api, _  
    
class addressverify(models.Model): 
    _inherit = "website"   
    
    #Api key of google maps
    api_addressverify = fields.Char('Api Addressverify') 
