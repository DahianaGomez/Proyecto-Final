var identiu = function(){     
        document.cookie = "identi=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        var name = identi;
        var value = document.getElementById('.email');
       document.cookie = name + "=" + value + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
   }