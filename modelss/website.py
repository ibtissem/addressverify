# -*- coding: utf-8 -*-
from odoo import api, fields, models, _
    
class addressverify(models.Model): 
    _inherit = "website"   
    
    #Api key of google maps
    api_addressverify = fields.Char('Api Addressverify') 
