import { NextRequest, NextResponse } from "next/server";
import { searchWooProducts } from "@/lib/woocommerce";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("q") || "";

    if (!query.trim()) {
        return NextResponse.json([]);
    }

    try {
        const products = await searchWooProducts(query);
        return NextResponse.json(products);
    } catch (error) {
        console.error("Search API error:", error);
        return NextResponse.json([], { status: 500 });
    }
}
