import Button from "@/components/Button";
import Container from "@/components/Container";
import { InputField, TextareaField } from "@/components/FormField";
import guestbookContent from "@/data/guestbook.json";

export default function GuestbookPage() {
    const { title, intro, tip, form } = guestbookContent;

    return (
        <main className="memorial-veil pb-16 pt-10">
            <Container className="flex flex-col gap-10">
                <section className="rounded-[32px] border border-black/5 bg-white/80 p-8 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                            <h2 className="font-serif text-3xl text-[#1e1c18]">{title}</h2>
                            <p className="text-base leading-relaxed text-[#5f564d]">
                                {intro}
                            </p>
                            <p className="text-sm text-[#6f655a]">{tip}</p>
                        </div>
                        <form className="grid gap-4">
                            <InputField placeholder={form.namePlaceholder} type="text" />
                            <InputField placeholder={form.emailPlaceholder} type="email" />
                            <TextareaField
                                className="min-h-[140px]"
                                placeholder={form.messagePlaceholder}
                            />
                            <Button type="button">{form.buttonLabel}</Button>
                        </form>
                    </div>
                </section>
            </Container>
        </main>
    );
}
