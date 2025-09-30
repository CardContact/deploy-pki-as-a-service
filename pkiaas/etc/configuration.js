/**
 *  ---------
 * |.##> <##.|  Open Smart Card Development Platform (www.openscdp.org)
 * |#       #|
 * |#       #|  Copyright (c) 1999-2010 CardContact Software & System Consulting
 * |'##> <##'|  Andreas Schwier, 32429 Minden, Germany (www.cardcontact.de)
 *  ---------
 *
 *  This file is part of OpenSCDP.
 *
 *  OpenSCDP is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License version 2 as
 *  published by the Free Software Foundation.
 *
 *  OpenSCDP is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with OpenSCDP; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @fileoverview Configuration
 */

GPSystem.log(GPSystem.INFO, "pki-as-a-service.config", "Sourcing from etc/configuration.js");

Config.database = {
	type: "MySQL",
	url: "jdbc:mysql://mariadb-test/pkiaas",
	user: "pkiaas",
	password: "changeme"
}


Config.global = {
	serverURL: "http://localhost:8080",
	allowResetDB: false,
	allowDevHSM: true,
	disableBuildinX509: true,
	grantSubscriberRole: true
}


Config.services = [
{
	type: "PAAS",
	name: "PKIaaS",
	description: "The PKI-as-a-Service Portal",
	url: "paas",
	port: 8080,
	smtpConfig: {
		smtpserver: "",
		emailfrom: "do-not-reply@cardcontact.de",
		emailAdmin: "admin@cardcontact.de"
	},

	core: {
		rtURL: "http://localhost:8080/core-rt/core",
		apiURL: "https://pkiaas-backend-test:8443"
	},
}
];

Config.keystore = {
	withHSMService: {
		// Add locally connected SmartCard-HSMs.
		// readerName		is the PC/SC name of the reader for accessing the SmartCard-HSM
		// protectedPINEntry	set to true to enable PIN entry on the server, e.g using the OCF PIN dialog or class 3 PIN reader.
		//			This is useful if the server is running on a workstation
		// pin			Set a predefined PIN for the service
//		localHSMs: [
//			{ readerName: "REINER SCT cyberJack RFID komfort (5968333780) 00 00", protectedPINEntry: true },
//			{ readerName: "Identive SCT3522CC token [CCID Interface] (55521515601800) 00 00", protectedPINEntry: false, pin: "648219" }
//		]
	}
};
