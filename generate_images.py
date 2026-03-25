"""Generate OG image and logo for louisdecaumont.fr"""

from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public")

# Colors
BG = "#FAFAFA"
FG = "#09090B"
MUTED = "#71717A"
ACCENT = "#E4E4E7"


def get_font(size, bold=False):
    """Try to load Inter, fall back to system fonts."""
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def create_og_image():
    """Create 1200x630 OG image."""
    width, height = 1200, 630
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)

    # Subtle border (4px inset)
    border_width = 4
    draw.rectangle(
        [border_width, border_width, width - border_width - 1, height - border_width - 1],
        outline=ACCENT,
        width=2,
    )

    # Accent line at top
    draw.rectangle([0, 0, width, 6], fill=FG)

    # Main title
    font_title = get_font(64, bold=True)
    font_subtitle = get_font(32)
    font_url = get_font(22)

    title = "Louis de Caumont"
    subtitle = "Développeur Web Freelance à Lyon"
    url = "louisdecaumont.fr"

    # Center title
    title_bbox = draw.textbbox((0, 0), title, font=font_title)
    title_w = title_bbox[2] - title_bbox[0]
    title_x = (width - title_w) // 2
    title_y = height // 2 - 80

    draw.text((title_x, title_y), title, fill=FG, font=font_title)

    # Center subtitle
    sub_bbox = draw.textbbox((0, 0), subtitle, font=font_subtitle)
    sub_w = sub_bbox[2] - sub_bbox[0]
    sub_x = (width - sub_w) // 2
    sub_y = title_y + 85

    draw.text((sub_x, sub_y), subtitle, fill=MUTED, font=font_subtitle)

    # Decorative line between title and subtitle
    line_y = title_y + 75
    line_half = 40
    draw.rectangle(
        [(width // 2 - line_half, line_y), (width // 2 + line_half, line_y + 3)],
        fill=MUTED,
    )

    # URL at bottom
    url_bbox = draw.textbbox((0, 0), url, font=font_url)
    url_w = url_bbox[2] - url_bbox[0]
    url_x = (width - url_w) // 2
    url_y = height - 60

    draw.text((url_x, url_y), url, fill=MUTED, font=font_url)

    output_path = os.path.join(OUTPUT_DIR, "og-image.png")
    img.save(output_path, "PNG")
    print(f"OG image saved: {output_path}")


def create_logo():
    """Create 512x512 logo with LC initials."""
    size = 512
    img = Image.new("RGB", (size, size), BG)
    draw = ImageDraw.Draw(img)

    # Circle background
    margin = 24
    draw.ellipse(
        [margin, margin, size - margin, size - margin],
        fill=FG,
    )

    # LC text centered in circle
    font_logo = get_font(180, bold=True)
    text = "LC"

    text_bbox = draw.textbbox((0, 0), text, font=font_logo)
    text_w = text_bbox[2] - text_bbox[0]
    text_h = text_bbox[3] - text_bbox[1]
    text_x = (size - text_w) // 2
    text_y = (size - text_h) // 2 - text_bbox[1]  # offset for baseline

    draw.text((text_x, text_y), text, fill=BG, font=font_logo)

    # Subtle ring around circle
    ring_width = 3
    draw.ellipse(
        [margin - ring_width, margin - ring_width, size - margin + ring_width, size - margin + ring_width],
        outline=ACCENT,
        width=ring_width,
    )

    output_path = os.path.join(OUTPUT_DIR, "logo.png")
    img.save(output_path, "PNG")
    print(f"Logo saved: {output_path}")


if __name__ == "__main__":
    create_og_image()
    create_logo()
    print("Done!")
