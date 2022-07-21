from tkinter import *

root = Tk()

e = Entry(root, width=50, borderwidth=2, bg="pink", fg="purple")
e.pack()
e.insert(0, "Enter your name: ")

def func(event):
    print("You hit return.")
root.bind('<Return>', func)

def myClick(event=None):
    hello = "Hello "+e.get()
    myLabel = Label(root, text= hello )
    myLabel.pack()

#bind func to bind
root.bind('<Return>', myClick)
       
myButton = Button(root, text="Enter Name", command=myClick)
myButton.pack()

root.mainloop()