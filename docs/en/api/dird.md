# Dird

**`Misc`**

Use Dird to interact with directories.
```js
Wazo.dird.search(context: string, term: string, offset: number, limit: number);
Wazo.dird.listPersonalContacts();
Wazo.dird.addContact(newContact: NewContact);
Wazo.dird.editContact(contact: Contact);
Wazo.dird.deleteContact(contactUuid: UUID);
Wazo.dird.listFavorites(context: string);
Wazo.dird.markAsFavorite(source: string, sourceId: string);
Wazo.dird.removeFavorite(source: string, sourceId: string);
```