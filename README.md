# Futbak : Le site web du projet Futbak (Drupal 8)
![Futbak](http://192.168.0.114/futbak-pierre/themes/bootstrap_futbak/screenshot.png "Futbak")

- Le répertoire "themes" contient le theme bootstrap de Drupal ainsi qu'un sous-theme hérité de celui ci afin de le personaliser.
- Le répertoire "docs" contient des instructions spécifique au projet.
- Le répertoire "modules" contient les modules personalisé.
- Le répertoire "ressources" contient les exports de configuration du site.

# Liste des modules utilisé (www/modules)

[admin_toolbar 8.x-1.17](https://ftp.drupal.org/files/projects/admin_toolbar-8.x-1.17.zip)  
[backup_migrate 8.x-4.0-alpha1](https://ftp.drupal.org/files/projects/backup_migrate-8.x-4.0-alpha1.zip)  
[captcha 8.x-1.0-alpha1](https://ftp.drupal.org/files/projects/captcha-8.x-1.0-alpha1.zip)  
[devel 8.x-1.0-alpha1](https://ftp.drupal.org/files/projects/devel-8.x-1.0-alpha1.zip)  
[honeypot 8.x-1.23](https://ftp.drupal.org/files/projects/honeypot-8.x-1.23.zip)  
[recaptcha 8.x-2.2](https://ftp.drupal.org/files/projects/recaptcha-8.x-2.2.zip)  
[xmlsitemap 8.x-1.0-alpha2](https://ftp.drupal.org/files/projects/xmlsitemap-8.x-1.0-alpha2.zip) 

# Documentation 
[Documentation officiel D8](https://www.drupal.org/docs/8)  
[Convention de nommage](https://www.drupal.org/node/318)  
[Drupal Bootstrap Documentation](http://drupal-bootstrap.org/api/bootstrap)  

# Debug tips

   - Voir les log apache : tail -f /var/log/apache2/error.log
   - Augmenter "memory_limit" dans le php.ini
   - Example de phpinfo.php 

'''
<?php

// Affiche toutes les informations, comme le ferait INFO_ALL
phpinfo();

// Affiche uniquement le module d'information.
// phpinfo(8) fournirait les mêmes informations.
phpinfo(INFO_MODULES);

?>
''' 
