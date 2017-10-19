--structure mobile--

CREATE TABLE IF NOT EXISTS `tb_coordinates` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `longitude` varchar(50) COLLATE utf8_bin NOT NULL,
  `latitude` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `tb_coordinates_users` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`address` varchar(150) COLLATE utf8_bin NOT NULL,
	`nome` varchar(150) COLLATE utf8_bin NOT NULL,
	`lat` varchar(150) COLLATE utf8_bin NOT NULL,
	`lng` varchar(150) COLLATE utf8_bin NOT NULL,
	`type` varchar(15) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE IF NOT EXISTS `tb_users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `IdGroup` varchar(25) COLLATE utf8_bin NOT NULL,
  `NameGroup` varchar(25) COLLATE utf8_bin NOT NULL,
  `NameResponsible` varchar(25) COLLATE utf8_bin NOT NULL,
  `EmailResponsible` varchar(50) COLLATE utf8_bin NOT NULL,
  `AddressAccount` varchar(200) COLLATE utf8_bin NOT NULL,
  `PasswordAccount` varchar(50) COLLATE utf8_bin NOT NULL,
  `LatAccount` varchar(50) COLLATE utf8_bin NOT NULL,
  `LngAccount` varchar(50) COLLATE utf8_bin NOT NULL,
  `DateRegisterAccount` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `DateLastAccess` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SexAccount` int(2) NOT NULL,
  `AvatarAccount` int(2) NOT NULL,
  `StatusAccount` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
