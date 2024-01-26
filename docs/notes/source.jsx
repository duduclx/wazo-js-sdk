 // sources
 const officeSource = await Wazo.dird.fetchOffice365Source("default");
 /*
   {
   "total": 7,
   "filtered": 1,
   "items": [
     {
       "backend": "office365",
       "name": "auto_office365_my-company",
       "tenant_uuid": "958ac4de-d279-4f63-882a-b0e4f8347e56",
       "uuid": "0d75ccd5-4de1-481c-b8a3-eb118dab116a"
     }
   ],
   "_headers": {}
 }
 */
 // const office = Wazo.dird.fetchOffice365Contacts(source, queryParams)

 const contactsPhonebooksGet = async () => {
    
    // il n'existe pas fetchPhonebookSource("default")
    // il est possible d'avoir plusieurs sources
    // il n'existe pas d'appel pour lister si il y a différentes sources !
    // Wazo.dird.fetchSourcesFor("default") permet de lister pour une seule source, mais pas de connaitre les sources auter que celle par défaut !
    const phonebookSources = await Wazo.dird.fetchSourcesFor("default")
    const filteredPhonebookSources = phonebookSources.items.filter(
      (source) => source.backend === "phonebook" && source.uuid
    );
 }