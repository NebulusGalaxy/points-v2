_1 = 0
_2 = 0
_3 = 0
Hand = 0

def on_button_pressed_a():
    global Hand
    Hand = randint(1, 3)
    if Hand == 1:
        basic.show_leds("""
            . . . . .
                        # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        Hand = _1
    elif Hand == 2:
        basic.show_leds("""
            . . . . .
                        # . . . .
                        # . . . .
                        . . . . .
                        . . . . .
        """)
        Hand = _2
    else:
        basic.show_leds("""
            . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        . . . . .
        """)
        Hand = _3
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global _1, _2, _3
    if Hand == _1:
        _1 = randint(4, 6)
        if _1 == 4:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
            """)
        elif _1 == 5:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                . . . . #
                                . . . . .
                                . . . . .
            """)
        else:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                . . . . #
                                . . . . #
                                . . . . .
            """)
    if Hand == _2:
        _2 = randint(7, 9)
        if _2 == 7:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . .
                                . . . . .
                                . . . . .
            """)
        elif _2 == 8:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . #
                                . . . . .
                                . . . . .
            """)
        else:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . #
                                . . . . #
                                . . . . .
            """)
    if Hand == _3:
        _3 = randint(10, 12)
        if _3 == 10:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . .
                                # . . . .
                                . . . . .
            """)
        elif _3 == 11:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . #
                                # . . . .
                                . . . . .
            """)
        else:
            basic.show_leds("""
                . . . . .
                                # . . . #
                                # . . . #
                                # . . . #
                                . . . . .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)
