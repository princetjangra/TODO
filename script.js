$(()=>{
    // $('body').append($('<input>').attr('type','text').attr('id','newtask'))
    // $('body').append($('<button>').attr('id','addtask').text('+'))
    // $('body').append($('<button>').attr('id','clear').text('X'))
    // $('body').append($('<ul>').attr('id','todolist'))

    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')
    let clear = $('#clear')

    function added(){
            let task = newtask.val() //get value
            newtask.val('') //set value
            todolist.prepend(
                $('<li>')
                .append($('<span>').text(task)
                    .click(
                        (e) => $(e.currentTarget).parent().toggleClass('done'))
                    )
                .append(
                    $('<button>').text('X').addClass('btn btn-danger').click((e) => $(e.currentTarget).parent().remove())
                )
                // .append(
                //     $('<button>').text('↑').addClass('btn')
                // )
                // .append(
                //     $('<button>').text('↓').addClass('btn')
                // )
            )
            clear.click(
                function(){
                    $('.done').remove()
                }
            )

        }

    addtask.click( added)

    newtask.bind('keypress', function(e){
        if(e.keyCode==13)
            added()
    })
})