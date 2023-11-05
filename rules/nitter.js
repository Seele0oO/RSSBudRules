({
    "twitter.com": {
        _name: "Twitter ktachibana",
        ".": [{
            title: "R18 Tweets",
            docs: "https://github.com/zedeus/nitter",
            source: "/:id",
            targetType: "url",
            target: (params) => {
                if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                    return 'https://nitter.ktachibana.party/:id/rss';
                }
            }
        },
        {
            title: "R18 Tweets & Replies",
            docs: "https://github.com/zedeus/nitter",
            source: "/:id",
            targetType: "url",
            target: (params) => {
                if (!['home', 'explore', 'notifications', 'messages', 'explore', 'search'].includes(params.id)) {
                    return 'https://nitter.ktachibana.party/:id/with_replies/rss';
                }
            }
        },
        {
            title: "R18 Media",
            docs: "https://github.com/zedeus/nitter",
            source: "/:id",
            targetType: "url",
            target: (params) => {
                if (params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore' && params.id !== 'search') {
                    return 'https://nitter.ktachibana.party/:id/media/rss';
                }
            }
        }
        ]
    },
})