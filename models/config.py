# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, models, fields


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    #Api key of google maps
    api_addressverify = fields.Char(string='Api Addressverify', related='website_id.api_addressverify' ) 
    
    @api.model
    def get_values(self):
        get_param = self.env['ir.config_parameter'].sudo().get_param
        res = super(ResConfigSettings, self).get_values()  
        website = self.env['website'].search([])
        if website:
            res.update(
                api_addressverify = website[0].api_addressverify,
            )
        return res
    
    def set_values(self):
        super(ResConfigSettings, self).set_values() 
        set_param = self.env['ir.config_parameter'].sudo().set_param
        website = self.env['website'].search([])
        rreess = website.write({'api_addressverify': self.api_addressverify})
