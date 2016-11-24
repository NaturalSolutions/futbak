# Futbak : Le site web du projet Futbak (Drupal 8)
![Futbak](https://github.com/NaturalSolutions/futbak/blob/master/themes/bootstrap_futbak/screenshot.png?raw=true, "Futbak")

- Le répertoire **"themes"** contient :  
  - bootstrap : le theme bootstrap de Drupal [Bootstrap 8.x-3.0-rc2](https://ftp.drupal.org/files/projects/bootstrap-8.x-3.0.zip) qui sert de base (ne pas éditer), 
  - bootstrap_futbak : Un sous-theme hérité de Drupal Bootstrap, celui ci est un starterkit permettant un usage propre du theme. Dans le dossier "bootstrap_futbak/boostrap" sont les sources du framework front à ne pas éditer.
- Le répertoire **"docs"** contient des instructions spécifique au projet.
- Le répertoire **"modules"** contient les modules personalisé.
- Le répertoire **"ressources"** contient les exports de configuration du site.

# Liste des modules utilisé (www/modules)

[admin_toolbar 8.x-1.17](https://ftp.drupal.org/files/projects/admin_toolbar-8.x-1.17.zip)  
[backup_migrate 8.x-4.0-alpha1](https://ftp.drupal.org/files/projects/backup_migrate-8.x-4.0-alpha1.zip)  
[captcha 8.x-1.0-alpha1](https://ftp.drupal.org/files/projects/captcha-8.x-1.0-alpha1.zip)  
[devel 8.x-1.0-alpha1](https://ftp.drupal.org/files/projects/devel-8.x-1.0-alpha1.zip)  
[honeypot 8.x-1.23](https://ftp.drupal.org/files/projects/honeypot-8.x-1.23.zip)  
[recaptcha 8.x-2.2](https://ftp.drupal.org/files/projects/recaptcha-8.x-2.2.zip)  
[xmlsitemap 8.x-1.0-alpha2](https://ftp.drupal.org/files/projects/xmlsitemap-8.x-1.0-alpha2.zip) 

# Usage de less
Lancer **"grunt watch"** dans le répertoire (themes/bootstrap_futbak)

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
