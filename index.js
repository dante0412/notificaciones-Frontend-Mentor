const badgeNotify = document.getElementById('notify');

const users = [
    {
        avatar: 'assets/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        activity: 'Reacted to your recent post',
        interaction:  'My first tournament today',
        time: '1m ago'
    },
    {
        avatar: 'assets/images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        activity: 'followed you',
        time: '5m ago'
    },
    {
        avatar: 'assets/images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        activity: 'has joined your group',
        interaction:  'Chess Club',
        time: '1day ago'
    },
    {
        avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        activity: 'sent you a private message',
        privateMessage:  'Hello thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        time: '5days ago'
    },
    {
        avatar: 'assets/images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        activity: 'commented on your picture',
        time: '1weeks ago'
    },
    {
        avatar: 'assets/images/avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        activity: 'Reacted to your recent post',
        interaction:  '5end-game strategies to increase you win rate',
        time: '2weeks ago'
    },
    {   
        avatar: 'assets/images/avatar-anna-kim.webp',
        name: 'Anna Kim',
        activity: 'left the group',
        interaction:  'Chess Club',
        time: '2weeks ago'
    },
]

users.forEach(function(item, index){
    let classBadge = 'notify-badge'
    let newDiv = 'oi bb'
    

    if(item.interaction === 'Chess Club') {
        index = 'chess'
    }
    
    if(item?.privateMessage) {
        newDiv = document.createElement('p')
        newDiv.classList.add('private-msg')
        newDiv = newDiv.innerHTML = `${item.privateMessage}`
        classBadge = 'message-badge'

    } else {
        newDiv = ''
    }
    console.log(newDiv)


    item = document.write(`
    <div>
      <div class="${classBadge}" id="notify">
        <div class="avatar">
          <img src="${item.avatar}" alt="">
        </div>
        <div class="notify-message">
          <div class="action">
            <p><strong class="name">${item.name}</strong> ${item.activity} <strong class="${index}"> ${ item?.interaction ?? ''}<span  class="asterisk
              ">*</span></strong></p>
          </div>
          <div class="time"><p>${item.time}</p></div>
          <div class="private-msg"><p>${newDiv}</p></div>
        </div>
        <div>
      </div>
    </div>`);

    return item;
})