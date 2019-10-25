const myTree = {
    main: [
      {
        file: "Main Folder",
        child: [
          {
            file: "Work Document",
            child: [
              {
                file: "Functional Specifications",
                child: [
                  {
                    file: "TrieView spec"
                  }
                ]
              },
              {
                file: "Feature Schedule"
              },
              {
                file: "Overal Project Plan"
              },
              {
                file: "Feature Resource allocation"
              }
            ]
          },
          {
            file: "Personal Folder",
            child: [
              {
                file: "Home Remodal Folder",
                child: [
                  {
                    file: "File 1"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

    

 
function createTree(child) {
  const ul = document.createElement('ul');
  ul.classList.add('hide');

  for (let i = 0; i < child.length; i++) {
    const childs = child[i];

    const li = document.createElement('li');
    const span = document.createElement('span');
    const text = document.createTextNode(childs.file);

    li.appendChild(span);
    span.appendChild(text);
    if (childs.child) {
      span.classList.add("caret");
      li.appendChild(createTree(childs.child));
    } else {
      li.classList.add('file');
    }
    ul.appendChild(li);
  }
  return ul;
}

function show(obj) {
  const tree = document.getElementById('main');
  tree.appendChild(createTree(obj.main));
};

show(myTree);


const changeClass = document.getElementById('main').firstChild.setAttribute('class', 'show');
const selector = document.getElementsByClassName('caret');
for (let i = 0; i < selector.length; i++) {
  selector[i].addEventListener('click', function() {
    this.parentElement.querySelector('.hide').classList.toggle('active');
    this.classList.toggle("caret-down");
  });
}




  