var express = require('express');
var router = express.Router();

var posts = [
    {
        title: 'Very Important Post N° 1',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 2',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 3',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 4',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 5',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 6',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 7',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 8',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 9',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
    {
        title: 'Very Important Post N° 10',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, odio quis bibendum lobortis, metus est ornare risus, eu porta purus nulla id orci. Aliquam quis nulla non ante vulputate scelerisque sed nec sem. Quisque scelerisque venenatis lorem, sed aliquet arcu facilisis eget. Proin consectetur ante ac ultricies ultrices. Donec sed enim ut lacus tincidunt tempus et eu libero. Nam lectus ipsum, auctor sed massa eu, tincidunt blandit tortor. Etiam sed nibh ac sapien rhoncus elementum eu eget tortor. Sed ac nisl posuere, porttitor leo in, luctus tellus. Vestibulum sed leo lacus. In vestibulum sollicitudin nulla.
            <br><br>
            Vivamus venenatis lectus eget justo molestie efficitur. Integer eget erat enim. Sed fringilla lacus a imperdiet volutpat. Vivamus et felis eget nibh pretium posuere eget et magna. Sed sagittis placerat gravida. Donec ultricies feugiat interdum. Fusce semper et lectus nec semper. Integer venenatis lacus at fringilla ornare. Etiam sollicitudin mauris felis, sit amet hendrerit enim vulputate nec. Aenean fringilla malesuada ipsum, vel sodales velit placerat in.
            <br><br>
            Maecenas sed velit et nibh faucibus convallis at ut nunc. Phasellus et justo ex. Ut vitae massa arcu. Praesent faucibus nisi risus, vel semper lorem convallis quis. Curabitur quis aliquam eros. Praesent sagittis lorem ac egestas iaculis. Pellentesque fringilla suscipit interdum. Nulla eu odio a odio pretium imperdiet id non nunc. Cras pharetra at urna eu consectetur. Nulla facilisi. Nullam laoreet quam molestie, auctor libero eget, gravida arcu. Vivamus placerat faucibus lorem et aliquam.
        `
    },
]

router.get('/', function(req, res) {
    res.render('news', {
        title: 'News',
        body: `<ul class='news-list'>
                ${posts.map((post) => {
                    return (`<li class='post'>
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                            </li>
                        `
                    );
                }).join('')}
            </ul>
        `
    });
});

module.exports = router;