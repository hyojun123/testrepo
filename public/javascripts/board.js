const board = {
    insert : {
        init : function () {
            board.insert.bind();
        },
        bind : function () {
            $("#submitBtn").off().on('click', function () {
                if(board.insert.nullChk()) {
                    board.insert.frmSubmit();
                }
            });
        },
        nullChk : function () {
            let title = $("#title").val();
            let writer = $("#writer").val();
            let content = $("#content").val();

            if(!title) {
                alert("제목을 입력하세요.");
                $("#title").focus();
                return false;
            }
            if(!writer) {
                alert("작성자를 입력하세요.");
                $("#writer").focus();
                return false;
            }
            if(!content) {
                alert("내용을 입력하세요.");
                $("#content").val();
                return false;
            }
            return true;
        },
        frmSubmit : function () {
            $("#boardFrm").submit();
        }
    },
    view : {
        init : function () {
            board.view.bind();
        },
        bind : function () {
            $("#updateBoardBtn").off().on('click', function () {
                if(confirm('수정 하시겠습니까?')) {
                    var idx = $("#updateBoardBtn").data('idx');
                    location.href='/boards/update/'+idx;
                }
            });
        }
    },
    update : {
        init : function () {
            board.update.bind();
        },
        bind : function () {
            $("#submitBtn").off().on('click', function () {
                if(board.insert.nullChk()) {
                    board.insert.frmSubmit();
                }
            });
        }
    }
}