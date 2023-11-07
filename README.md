# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


        Menu = new MenuClass() { Id = 1, Name = "Menu Navn", MenuGroups = new List<MenuGroupClass>() };
        Menu.MenuGroups.Add(new MenuGroupClass() { Id = ++Lastid, Menu_Id = Menu.Id, Name = "Forretter", Order_Index = Lastid, MenuItems = new List<MenuItemClass>()});
        Menu.MenuGroups.Add(new MenuGroupClass() { Id = ++Lastid, Menu_Id = Menu.Id, Name = "Hovedretter", Order_Index = Lastid, MenuItems = new List<MenuItemClass>()});
        Menu.MenuGroups.Add(new MenuGroupClass() { Id = ++Lastid, Menu_Id = Menu.Id, Name = "Desserter", Order_Index = Lastid, MenuItems = new List<MenuItemClass>()});
        Menu.MenuGroups.Add(new MenuGroupClass() { Id = ++Lastid, Menu_Id = Menu.Id, Name = "Drikkevarer", Order_Index = Lastid, MenuItems = new List<MenuItemClass>()});
        Lastid = 0;
        Menu.MenuGroups[0].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[0].Id, Name = "Grillet asparges med \nparmaskinke", Description = "Asparges med parmaskinke, parmesan og balsamico", Order_Index = Lastid, Price = 100 });
        Menu.MenuGroups[0].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[0].Id, Name = "Carpaccio af oksemørbrad", Description = "Carpaccio med rucola, parmesan og pesto", Order_Index = Lastid, Price = 120 });
        Menu.MenuGroups[1].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[1].Id, Name = "Stegt andebryst med rødkål", Description = "Andebryst med rødkål, kartoffelmos og sauce", Order_Index = Lastid, Price = 180 });
        Menu.MenuGroups[1].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[1].Id, Name = "Kalvefilet med svampe", Description = "Kalvefilet med svampe, kartoffelgratin og sauce", Order_Index = Lastid, Price = 200 });
        Menu.MenuGroups[2].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[2].Id, Name = "Chokoladekage med is", Description = "Chokoladekage med vaniljeis og bær", Order_Index = Lastid, Price = 80 });
        Menu.MenuGroups[2].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[2].Id, Name = "Tiramisu", Description = "Tiramisu med mascarpone og kaffe", Order_Index = Lastid, Price = 90 });
        Menu.MenuGroups[3].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[3].Id, Name = "Øl", Description = "Fadøl eller flaskeøl", Order_Index = Lastid, Price = 50 });
        Menu.MenuGroups[3].MenuItems.Add(new MenuItemClass() { Id = ++Lastid, Menu_Group_Id = Menu.MenuGroups[3].Id, Name = "Vin", Description = "Husets rød- eller hvidvin", Order_Index = Lastid, Price = 60 });