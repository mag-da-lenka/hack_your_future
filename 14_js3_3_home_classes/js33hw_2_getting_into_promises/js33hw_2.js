console.log("\njs33hw_2_promises\n ")

// json: 
// https://api.github.com/search/repositories?q=user:benna100



function user(userName) {
  return fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
    .then(response => response.json())
}

Promise.all([
  user('Lucha2040'),
  user('mag-da-lenka'),
  user('SwathiSankararaman'),
  user('bengu-thon-mai-mochi')
])
  .then(data => {
    console.log(data);
    renderData(data)
  })


function renderData(data) {

  // main ul element (main list)
  const main_ul_El = document.createElement('ul')
  main_ul_El.classList.add("main_ul")
  main_ul_El.innerHTML = `<h2> GitHub Users: </h2>`
  document.body.appendChild(main_ul_El)

  data.forEach(repo => {

    // main li element with the name of the repo owner 
    const main_li_El = document.createElement(`li`)
    main_li_El.classList.add("main_li")
    main_li_El.innerHTML = `<h3>repo owner: ${repo.items[0].owner.login}</h3>`
    main_ul_El.appendChild(main_li_El)


    // for each main li element with the repo owner's name  ...
    repo.items.forEach(repo => {

      // ... create an internal ul ...
      const int_ul_El = document.createElement(`ul`)
      int_ul_El.classList.add("int_ul")
      // int_ul_El.innerHTML = `Internal ul`
      main_li_El.appendChild(int_ul_El)

      // ... and in it create an internal li element ...
      // ... with full name and url of the repo
      const li_repoNameAndUrl_El = document.createElement(`li`);
      li_repoNameAndUrl_El.classList.add("int_li")
      li_repoNameAndUrl_El.innerHTML = `${repo.full_name} <br> 
      ---> <a href='${repo.html_url}'>${repo.html_url}</a>`;
      int_ul_El.appendChild(li_repoNameAndUrl_El);

      // // or ---> like this: 
      // // ... with full name of the repo ...
      // const li_repoName_El = document.createElement(`li`);
      // li_repoName_El.classList.add("li_repo_name")
      // li_repoName_El.innerHTML = `repo name: ` + repo.full_name;
      // int_ul_El.appendChild(li_repoName_El);
      // // ... and its url
      // const li_url_El = document.createElement(`li`);
      // li_url_El.classList.add("li_url")
      // li_url_El.innerHTML = `repo url: <a href='${repo.html_url}'>${repo.html_url}</a>`;
      // li_repoName_El.append(li_url_El);

    })

  })

}