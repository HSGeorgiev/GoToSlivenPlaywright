// Global Constances

export class GoToSliven{

    

    constructor(){
        let commonTitlePart = ' – gotosliven Touristic Info Site';

        this.baseUrl = 'https://gotosliven.com';

        

        this.sitePages = [
            {
                title: 'gotosliven Touristic Info Site – Touristic Info Site of Sliven. Sites, Places, Hotels, Restaurants, attraction in Sliven City',
                path: '/',
            },
            {
                title: 'About us' + commonTitlePart,
                path: '/about-us/',
            },
            {
                title: 'Tourist Attractions' + commonTitlePart,
                path: '/tourist-attractions/',
            },
            {
                title: 'Become a friend of SLiven' + commonTitlePart,
                path: '/become-a-friend-of-sliven/',
            },
            
        ]

        function getNumberOfPages(page){
            return this.sitePages.Length;
        }

    }
}