/*                  events inutiles

  Wazo.Websocket.on("user_voicemail_message_deleted", onVoicemailDeleted)
  const onVoicemailDeleted = (data) => {
    // il est plus logique de gérer le tableau directement avec le buton suppression
    
    const userUuid = user.uuid; 
    const isCurrentUserAffected = data[`user_uuid:${userUuid}`] === true;
    if (isCurrentUserAffected) {
      const updatedVoicemails = voicemails.filter((voicemail) => voicemail.id !== data.data.message.id);
      setVoicemails(updatedVoicemails);
    }
  }
  
  Wazo.Websocket.on("user_voicemail_message_updated", onVoicemailUpdated)
  const onVoicemailUpdated = (data) => {
    // il faudrait mettre à jour le statut unread du message
    // la fonction est appelée également quand onVoicemailCreated
    // donc cet event n'est pas utilisable
    
    const userUuid = user.uuid; 
    const isCurrentUserAffected = data[`user_uuid:${userUuid}`] === true;
    if (isCurrentUserAffected) {
      console.log('updated !')
    }
  }

    Wazo.Websocket.on("favorite_added", onFavoriteAdded)
    const onFavoriteAdded = (data) => {
      // vérifier si utilisateur concerné
      const userUuid = user.uuid; // Votre user.uuid
      const isCurrentUserAffected = data[`user_uuid:${userUuid}`] === true;
      if (isCurrentUserAffected) {
            getPhoneFavs()
      }
    }

    Wazo.Websocket.on("favorite_deleted", onFavoriteDeleted)
    const onFavoriteDeleted = (data) => {
      // vérifier si utilisateur concerné
      const userUuid = user.uuid; // Votre user.uuid
      const isCurrentUserAffected = data[`user_uuid:${userUuid}`] === true;
      if (isCurrentUserAffected) {
            getPhoneFavs()
      }
    }
  */