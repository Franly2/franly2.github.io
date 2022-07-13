private void removeRippleEffectFromCheckBox(CheckBox checkBox) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        Drawable drawable = checkBox.getBackground();
        if (drawable instanceof RippleDrawable) {
            drawable = ((RippleDrawable) drawable).findDrawableByLayerId(0);
            checkBox.setBackground(drawable);
        }
    }
}