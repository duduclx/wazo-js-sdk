mettre les type de valeur des paramètres

faire l'ensemble des fonctions disponible dans Wazo.Phone

lister les events

faire l'enesmble des Wazo.Phone.on('event', callback)

mettre à jour les liens entre les fonctions et les events

pensez aux websocket également, notamment on_call_created et on_call_updated



# atxfer et conference

- fournir un objet 
- détailler l'exemple

conférence quit
Attention ! si on veut quitter que nous, il faut utiliser 
adHocconference.phone.currentCallSession qui a son call : undefined
et mettre son id à soi
afin d'avoir le talkingtoids [0] = à son id !!