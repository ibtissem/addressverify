# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, models, fields


class WebsiteConfigSettings(models.TransientModel):
    _inherit = 'website.config.settings'

    #Api key of google maps
    api_addressverify = fields.Char(related='website_id.api_addressverify') 
    
    @api.model
    def get_default_api_addressverify(self, fields):
        website_obj = self.env['website']
        website = website_obj.search([])
        if website:
            return {'api_addressverify': website[0].api_addressverify }
 
    @api.multi
    def set_api_addressverify(self):
        website_obj = self.env['website']
        for record in self:
            website = website_obj.search([])
            numm = record.api_addressverify
            if website:
                for wbs in website:
                    wbs.write({'api_addressverify': record.api_addressverify })
        return True